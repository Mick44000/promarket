import Script from "next/script";
import { ghlForm } from "@/lib/site";

export function GhlForm() {
  const { id, name } = ghlForm;
  if (!id) {
    return <p className="note">Le formulaire n’est pas encore relié.</p>;
  }
  const frameId = `inline-${id}`;
  return (
    <div className="ghl-form">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${id}`}
        id={frameId}
        title={name}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={name}
        data-height="720"
        data-layout-iframe-id={frameId}
        data-form-id={id}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
