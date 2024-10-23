import { OSSC } from "@/components/BaseOssTable";
import { ColumnDef } from "@tanstack/react-table";

export const data: OSSC[] = [
  {
    id: "1",
    name: "OSSC Addis Ababa",
    region: "Addis Ababa",
    zone: "Bole",
    woreda: "Woreda 03",
    houseNumber: "123",
    phoneNumber: "+251911234567",
  },
  {
    id: "2",
    name: "OSSC Bahir Dar",
    region: "Amhara",
    zone: "West Gojjam",
    woreda: "Bahir Dar Zuria",
    houseNumber: "456",
    phoneNumber: "+251922345678",
  },
  // Add more sample data as needed
];

export const columns: ColumnDef<OSSC>[] = [
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
  {
    accessorKey: "woreda",
    header: "Woreda/District",
  },
  {
    accessorKey: "houseNumber",
    header: "House Number",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
];
