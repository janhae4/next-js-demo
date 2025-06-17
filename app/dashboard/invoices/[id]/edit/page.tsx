import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Suspense } from "react";
import { FormRowSkeleton } from "@/app/ui/skeletons";
import { FormEditWrapper } from "@/app/ui/invoices/form-wrapper";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Suspense fallback={<FormRowSkeleton />}>
        <FormEditWrapper id={id} />
      </Suspense>
    </main>
  );
}
