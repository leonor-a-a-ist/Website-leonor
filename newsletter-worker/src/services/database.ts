/* Database services for managing data in D1 */

// Cloudflare Workers Bindings
type Bindings = {
	DB: D1Database;
};

/* ######################### NEWSLETTERS ######################### */

/* Inserts or updates a newsletter row in the D1 database */
export async function insertNewsletter(
	env: Bindings,
	data: {
		hover_title: string;
		date: string;
		fileKey: string;
		slug: string;
		num_pages: number;
		lang: string;
	},
) {
	// hidden is set to 0 (visible) by default when inserting a new newsletter
	return env.DB.prepare(
		`INSERT OR REPLACE INTO newsletters (hover_title, date, file_key, slug, num_pages, lang) 
         VALUES (?, ?, ?, ?, ?, ?)`,
	)
		.bind(data.hover_title, data.date, data.fileKey, data.slug, data.num_pages, data.lang)
		.run();
}

/* Retrieves a list of newsletters from the D1 database, optionally filtered by language or visibility */
export async function listNewsletters(env: Bindings, lang?: string, visible?: string) {
	let query = `SELECT * FROM newsletters`;
	const params: string[] = [];
	const conditions: string[] = [];

	if (lang) {
		conditions.push(`lang = ?`);
		params.push(lang);
	}

	if (visible === 'visible') {
		conditions.push(`hidden = 0`);
	} else if (visible === 'hidden') {
		conditions.push(`hidden = 1`);
	} else if (visible === 'all') {
		// All newsletters, no additional condition needed
	} else if (visible !== undefined) {
		// empty result for invalid visible parameter
		return { results: [] };
	}

	if (conditions.length > 0) {
		query += ` WHERE ` + conditions.join(' AND ');
	}

	query += ` ORDER BY date DESC`;

	const stmt = env.DB.prepare(query);

	return params.length ? stmt.bind(...params).all() : stmt.all();
}

export async function getNewsletterPagesNum(env: Bindings, fileKey: string) {
	return env.DB.prepare(`SELECT num_pages FROM newsletters WHERE file_key = ?`).bind(fileKey).first();
}

export async function deleteNewsletterRow(env: Bindings, fileKey: string) {
	return env.DB.prepare(`DELETE FROM newsletters WHERE file_key = ?`).bind(fileKey).run();
}

export async function toggleNewsletterVisibility(env: Bindings, fileKey: string) {
	return env.DB.prepare(`UPDATE newsletters SET hidden = NOT hidden WHERE file_key = ?`).bind(fileKey).run();
}

/* ######################### JOIN US ######################### */

export async function addSubscription(
	env: Bindings,
	data: {
		email: string;
		subscribed_at: string;
		notification_count: number;
	},
) {
	return env.DB.prepare(
		`INSERT OR REPLACE INTO recruitment_subscribers (email, subscribed_at, notification_count) 
         VALUES (?, ?, ?)`,
	)
		.bind(data.email, data.subscribed_at, data.notification_count)
		.run();
}

export async function getSubscriptions(env: Bindings) {
    return env.DB.prepare(`SELECT * FROM recruitment_subscribers`).all();
}

export async function incrementNotificationCount(env: Bindings, email: string) {
    return env.DB.prepare(`UPDATE recruitment_subscribers SET notification_count = notification_count + 1 WHERE email = ?`).bind(email).run();
}
