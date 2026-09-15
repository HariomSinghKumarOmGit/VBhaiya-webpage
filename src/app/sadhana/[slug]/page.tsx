import { notFound } from "next/navigation";
import { getSadhanaBySlug, SADHANAS_DATA } from "@/data/sadhanas";
import SadhanaDetailView from "@/components/SadhanaDetailView";

export async function generateStaticParams() {
  return SADHANAS_DATA.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sadhana = getSadhanaBySlug(slug);
  if (sadhana) {
    return {
      title: `${sadhana.title} (${sadhana.durationLabel}) | Innerlight`,
      description: sadhana.summary,
    };
  }
  return {
    title: "Sadhana Details | Innerlight",
  };
}

export default async function SadhanaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sadhana = getSadhanaBySlug(slug);

  if (!sadhana) {
    notFound();
  }

  return <SadhanaDetailView sadhana={sadhana} />;
}
