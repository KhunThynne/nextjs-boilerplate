"use server";

import { revalidatePath } from "next/cache";

export default async function revalidatePathX(path: string) {
  revalidatePath(path, "page");
}
