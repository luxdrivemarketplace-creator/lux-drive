const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");

// A reusable function for communicating with the backend.
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const headers = new Headers(options.headers);
  headers.set("Accept", "application/json");

  // Add JSON content type when sending a JSON string.
  if (typeof options.body === "string" && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(
    `${API_BASE_URL}/${endpoint.replace(/^\/+/, "")}`,
    {
      ...options,
      headers,
    }
  );

  // Handle unsuccessful HTTP responses.
  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      message || `API request failed with status ${response.status}`
    );
  }

  // Some successful requests have no response body.
  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}