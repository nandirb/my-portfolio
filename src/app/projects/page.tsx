"use client";
import { Card } from "@components/Card";
const content =
  "Хувь тавилан, заяа төөрөг, дурсамж хийгээд харуусал. Ертөнцийг хөдөлгөгч үл танигчыг эгдүүцүүлэхгүй орших нь хэр хүнд вэ? ...";

export default function Page() {
  return (
    <div className="flex">
      <Card
        title="Төгсгөлийн мэдрэмж (Жулиан Барнс)"
        date="2020 June 23"
        content={content}
      />
      <Card
        title="Төгсгөлийн мэдрэмж (Жулиан Барнс)"
        date="2020 June 23"
        content={content}
      />
    </div>
  );
}
