import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@apollo/client";
import {
  GET_BASE_REGIONS,
  GET_BASE_SUB_CITY,
  GET_BASE_WEREDA,
  Get_SUB_CITY,
} from "@/quaries";
import { useState } from "react";

export default function CreateOSSCModal() {
  const { loading, error, data } = useQuery(GET_BASE_REGIONS);

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedSubcity, setSelectedSubcity] = useState<string | null>(null);
  const [selectedWoreda, setSelectedWoreda] = useState<string | null>(null);

  if (loading) return <p>Loading regions...</p>;
  if (error) return <p>Error fetching regions: {error.message}</p>;

  const whereWereda = selectedSubcity
    ? { subcity_id: { _eq: selectedSubcity } }
    : {};

  const whereSubcity = selectedRegion
    ? { region_id: { _eq: selectedRegion } }
    : {};

  const {
    loading: subcityLoading,
    error: subcityError,
    data: subcityData,
  } = useQuery(Get_SUB_CITY, {
    variables: { where: whereSubcity },
  });

  const {
    loading: woredaLoading,
    error: woredaError,
    data: woredaData,
  } = useQuery(GET_BASE_WEREDA, {
    variables: { whereWereda },
  });

  console.log(subcityData);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black hover:bg-blue-600">
          <Plus className="mr-2 h-4 w-4" /> Create OSSC
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[1000px] p-12">
        <DialogHeader></DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="occs-name" className="text-muted-foreground">
                OCCS Name *
              </Label>
              <Input
                id="occs-name"
                placeholder="Enter name"
                className="border-muted py-7 rounded-lg "
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="region" className="text-muted-foreground">
                Region *
              </Label>
              <Select onValueChange={setSelectedRegion}>
                <SelectTrigger className="border-muted py-7 rounded-lg ">
                  <SelectValue placeholder="Select a region" />
                </SelectTrigger>
                <SelectContent>
                  {data.base_regions.map(
                    (region: { id: string; name: string }) => (
                      <SelectItem key={region.id} value={region.id}>
                        {region.name}{" "}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-muted-foreground">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Write description"
              className="border-muted py-7 rounded-lg "
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="zone" className="text-muted-foreground">
                Zone or Sub city *
              </Label>
              <Select onValueChange={setSelectedSubcity}>
                <SelectTrigger
                  id="zone"
                  className="border-muted py-7 rounded-lg "
                >
                  <SelectValue placeholder="Select zone" />
                </SelectTrigger>
                <SelectContent>
                  {subcityData?.base_subcity.map(
                    (subcity: { id: string; name: string }) => (
                      <SelectItem key={subcity.id} value={subcity.id}>
                        {subcity.name}{" "}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="woreda" className="text-muted-foreground">
                Woreda or District *
              </Label>
              <Select onValueChange={setSelectedWoreda}>
                <SelectTrigger
                  id="woreda"
                  className="border-muted py-7 rounded-lg "
                >
                  <SelectValue placeholder="Select woreda" />
                </SelectTrigger>
                <SelectContent>
                  {woredaData?.base_woreda.map(
                    (woreda: { id: string; name: string }) => (
                      <SelectItem key={woreda.id} value={woreda.id}>
                        {woreda.name}{" "}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="house-number" className="text-muted-foreground">
                House Number *
              </Label>
              <Input
                id="house-number"
                placeholder="Enter house number"
                className="border-muted py-7 rounded-lg "
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone-number" className="text-muted-foreground">
                Phone Number *
              </Label>
              <Input
                id="phone-number"
                placeholder="Enter phone number"
                className="border-muted py-7 rounded-lg "
              />
            </div>
          </div>
          <div className="flex justify-end items-end">
            <Button type="submit" className="px-16 py-6 bg-blue-500">
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
