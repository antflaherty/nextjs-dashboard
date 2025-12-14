"use server";

export async function createInvoice(formData: FormData) {
  console.log("server action");
  console.log(JSON.stringify(formData));
}
