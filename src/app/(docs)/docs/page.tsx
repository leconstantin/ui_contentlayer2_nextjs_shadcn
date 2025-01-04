import { DocsPageHeader } from "@/components/page-header";

export default function Page() {
  return  <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
  <div className="mx-auto w-full min-w-0">
    <DocsPageHeader heading={"Documentation"} text={"Welcome to the Taxonomy documentation."} />
    
  </div>
  
</main>;
}
