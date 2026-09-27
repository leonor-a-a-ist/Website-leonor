const WORKER_URL = process.env.NEXT_PUBLIC_WORKER_URL;

export type SubscribeResult =
  { status: "success" } | { status: "invalid_email" } | { status: "error" };

export async function subscribeEmail(email: string): Promise<SubscribeResult> {
  try {
    if (!email || typeof email !== "string") {
      return { status: "invalid_email" };
    }

    const response = await fetch(`${WORKER_URL}/subscribe-recruitment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 200) {
      return { status: "success" };
    }

    if (response.status === 400) {
      return { status: "invalid_email" };
    }

    return { status: "error" };
  } catch (error) {
    console.error("Error subscribing:", error);
    return { status: "error" };
  }
}
