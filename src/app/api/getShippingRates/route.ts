import { NextRequest, NextResponse } from "next/server";
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: `ShippoToken ${process.env.SHIPPO_API_KEY!}`,
  shippoApiVersion: "2018-02-08",
});

export async function POST(req: NextRequest) {
  try {
    const { addressTo, addressFrom, parcel } = await req.json();
    console.log("Received body:", { addressTo, addressFrom, parcel });

    const shipment = await shippo.shipments.create({
      addressFrom,
      addressTo,
      parcels: [parcel],
      async: false,
    });

    console.log("Shipment created:", shipment);
    return NextResponse.json(shipment.rates);
  } catch (error: any) {
    console.error("Shippo API error:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error", stack: error.stack },
      { status: 500 }
    );
  }
}
