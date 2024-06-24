import { suscripciones } from "@/data/mockData";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(suscripciones);
}
