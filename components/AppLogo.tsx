import { LayoutDashboard } from "lucide-react";
const AppLogo=()=> {
  return (
    <div className="flex items-center justify-between space-x-2 mt-1">
      <div className="flex gap-2 items-center">
        <div className="w-11 h-11 bg-primary rounded-md flex items-center justify-center">
          <LayoutDashboard className="text-primary-foreground" />
        </div>
        <h1 className={"text-[20px] flex gap-1 max-md:hidden"}>
          <span className="font-bold">test</span>
        </h1>
      </div>
    </div>
  );
}
export default AppLogo