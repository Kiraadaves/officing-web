import { Alegreya_Sans } from "next/font/google";
import SettingsSidebar from "@/components/SettingsSidebar";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-1/6 h-screen rounded-r-[8px] bg-[#ffffff] pt-6 pl-6">
        <SettingsSidebar />
      </div>
      <div className="bg-[#E3EFE0] w-5/6">{children}</div>
    </div>
  );
}
