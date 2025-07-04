import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Suspense } from "react";
import { FormRowSkeleton } from "@/app/ui/skeletons";
import { FormInvoiceWrapper } from "@/app/ui/invoices/form-wrapper";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Suspense fallback={<FormRowSkeleton />}>
        <FormInvoiceWrapper />
      </Suspense>
    </main>
  );
}
