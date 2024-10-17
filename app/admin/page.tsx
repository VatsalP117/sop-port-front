"use client";
import withAuth from "@/app/withAuth";
import Logout from "@/components/logout";
import { Button } from "@/components/ui/button";

function Admin() {
  return (
    <div className="container flex h-[90vh] flex-row items-center justify-center py-8 md:gap-4 lg:gap-6">
      <Logout />
      <Button
        className="relative overflow-hidden
      text-white font-semibold py-2 px-4 rounded
      bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500
      bg-[length:200%_100%]
      animate-gradient"
        onClick={() => {
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/projectalloc/api/hello`)
            .then((res) => res.text())
            .then((data) => {
              let link = document.createElement("a");
              link.setAttribute("href", data);
              link.setAttribute("download", "data.csv");
              document.body.appendChild(link);
              link.click();
            });
        }}
      >
        Download CSV
      </Button>
    </div>
  );
}
export default withAuth(Admin, "admin");
