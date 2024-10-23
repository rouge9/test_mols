import { OSSC } from "@/components/BaseOssTable";
import { ColumnDef } from "@tanstack/react-table";

export const data: OSSC[] = [
  {
    id: "1",
    name: "OSSC Addis Ababa",
    region: "Addis Ababa",
    zone: "Bole",
  },
  {
    id: "2",
    name: "OSSC Bahir Dar",
    region: "Amhara",
    zone: "West Gojjam",
  },
];

export const columns: ColumnDef<OSSC>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "OSSC Name",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
  {
    accessorKey: "zone",
    header: "Zone/Sub City",
  },
];
