import { Button, Text, Heading, Hr, Img } from "@react-email/components";
import BaseEmailWithPreview from "./baseEmailWithPreview";

interface PromotionalEmailProps {
  name?: string;
  message?: string;
}

export default function PromotionalEmail({ name }: PromotionalEmailProps) {
  const URL = process.env.BASE_URL;
  const displayName = name?.trim() || "there";

  return (
    
    <BaseEmailWithPreview>

      <Heading style={{ fontSize: "22px", color: "#111", margin: "0 0 8px" }}>
        Hey {displayName} 👋
      </Heading>

      <Text style={{ color: "#555", fontSize: "15px", lineHeight: "1.6" }}>
        We have an exclusive offer just for you! For a limited time, enjoy 20% off your next purchase with us. Don&apos;t miss out on this fantastic deal!
      </Text>

      <Text style={{ color: "#555", fontSize: "15px", lineHeight: "1.6", marginTop: "16px" }}>
        Also you&apos;re not getting that iPhone for free, just so you know. LOL
      </Text>

      <Img
        src={URL + "/laughing.png"}
        alt="Laughing Image"
        style={{ maxWidth: "100%", height: "auto", margin: "16px 0" }}
      />

      <Button
        href="https://example.com/shop"
        style={{ backgroundColor: "#4f46e5", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontSize: "15px", display: "inline-block", marginTop: "16px" }}
      >
        Shop Now
      </Button>

      <Hr style={{ margin: "32px 0", borderColor: "#eee" }} />

      <Text style={{ color: "#aaa", fontSize: "13px" }}>
        Questions? Don&apos;t reply to this email — we don&apos;t care.
      </Text>

    </BaseEmailWithPreview>
  );
}