export async function getActiveTheme() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/current-theme`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) return null;

    return res.json();
}