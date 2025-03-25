import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const message = (await request.json()) as {
        paths: string[];
    };

    for (const path of message.paths) {
        // eslint-disable-next-line no-console
        console.log(`Revalidate path: ${path}`);
        revalidatePath(path);
    }

    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
