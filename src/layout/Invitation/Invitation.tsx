import styled from "@emotion/styled";
import Host from "../Contact/Host.tsx";
import { Paragraph } from "@/components/Text.tsx";
import { IMain } from "@/types/data.ts"


const Invitation = (props: IMain) => {
  const { message, host } = props;

  return (
    <InvitationWrapper>
      <Paragraph>
        {message}
      </Paragraph>
      <Host groom={host.groom} bride={host.bride}/>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
