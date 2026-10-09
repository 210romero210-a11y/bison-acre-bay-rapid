import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RichText } from "@/components/rich-text";
import { FAQS } from "@/lib/site";

export function FaqList({ items = FAQS }: { items?: readonly { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.q} value={`item-${index}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>
            <RichText text={item.a} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
