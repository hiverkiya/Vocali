"use client";

import { PricingTable as ClerkPricingTable } from "@clerk/nextjs";

export const PricingTable = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <ClerkPricingTable
        for="organization"
        appearance={{
          elements: {
            pricingTableCard: "shadow-md! border! rounded-xl! bg-card!",

            pricingTableCardHeader: "bg-card! border-b! px-6! py-4!",

            pricingTableCardBody: "bg-card! px-6! py-4!",

            pricingTableCardFooter: "bg-card! px-6! py-4!",

            buttonPrimary:
              "bg-primary! text-primary-foreground! hover:bg-primary/90! active:bg-primary/80! focus:ring-2! focus:ring-ring! rounded-md! shadow-sm! transition-all!",

            button:
              "bg-primary! text-primary-foreground! hover:bg-primary/90! rounded-md!",

            pricingTableCheckoutButton:
              "bg-primary! text-primary-foreground! hover:bg-primary/90!",

            buttonSecondary:
              "bg-secondary! text-secondary-foreground! hover:bg-secondary/80! rounded-md!",

            pricingTablePrice: "text-2xl font-semibold text-foreground",

            pricingTablePlanTitle: "text-lg font-semibold text-foreground",
          },
        }}
      />
    </div>
  );
};
