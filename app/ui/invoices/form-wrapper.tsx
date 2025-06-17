import EditInvoiceForm from "./edit-form";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Form from "./create-form";

export async function FormEditWrapper({ id }: { id: string }) {
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }
  return <EditInvoiceForm invoice={invoice} customers={customers} />;
}

export async function FormInvoiceWrapper() {
  const customers = await fetchCustomers();
  return <Form customers={customers} />; 
}