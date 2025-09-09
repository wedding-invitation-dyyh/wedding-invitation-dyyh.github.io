import styled from "@emotion/styled";
import AccountWrap from "./AccountWrap.tsx";
import Accordion from "@/components/Accordion.tsx";
import {IHostInfo} from "@/types/data.ts"

interface AccountProps {
  id : string;
  hostInfo: IHostInfo[];
}

const Account = ({id, hostInfo}: AccountProps) => {
  return (
    <HostInfoWrapper>
      {hostInfo.map((host) => {
        return (
          <Accordion id={id} title={host.host} key={host.host}>
            {host.accountInfo.map((account) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  kakaopayAccount={account.kakaopayAccount}
                  tossAccount={account.tossAccount}
                />
              );
            })}
          </Accordion>
        );
      })}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;
