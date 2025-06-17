import { use } from "react";
import Pagination from "./pagination";
import { fetchInvoicesPages } from "@/app/lib/data";

export default function PaginationWrapper({ query }: { query: string }) {
  const totalPages = use(fetchInvoicesPages(query));
  return <Pagination totalPages={totalPages} />;
}


