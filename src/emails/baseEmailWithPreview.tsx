import { Html, Head, Body, Container, Text, Hr, Preview } from "@react-email/components";

interface BaseEmailProps {
  children: React.ReactNode;
}

export default function BaseEmail({ children }: BaseEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>WIN A FREE IPHONE! Click to find out how!</Preview>
      <Body style={{ backgroundColor: "#f4f4f4", fontFamily: "sans-serif" }}>

        {/* Header */}
        <Container style={{ maxWidth: "480px", margin: "40px auto 0" }}>
          <Text style={{ fontSize: "13px", color: "#aaa", margin: "0 0 12px", letterSpacing: "0.05em" }}>
            Testing Inc
          </Text>
        </Container>

        {/* Card */}
        <Container style={{ backgroundColor: "#ffffff", margin: "0 auto", padding: "32px", borderRadius: "8px", maxWidth: "480px" }}>
          {children}
        </Container>

        {/* Footer */}
        <Container style={{ maxWidth: "480px", margin: "0 auto", padding: "16px 0 40px" }}>
          <Hr style={{ borderColor: "#e4e4e4", margin: "0 0 16px" }} />
          <Text style={{ color: "#bbb", fontSize: "12px", margin: 0 }}>
            You&apos;re receiving this email because you signed up at acme.com.{" "}
            <a href="https://example.com/unsubscribe" style={{ color: "#bbb" }}>Unsubscribe</a>
          </Text>
        </Container>

      </Body>
    </Html>
  );
}