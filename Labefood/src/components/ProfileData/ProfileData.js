import React, { useContext } from "react";
import { useHistory } from "react-router";
import { goToAddressEdit, goToEditProfile } from "../../routes/Coordinator";
import { DataContainer, H4 } from "./styles";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import GlobalStateContext from "../../context/GlobalStateContext";

export default function ProfileData(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const history = useHistory();

  const editPersolnalInfo = () => {
    goToEditProfile(history);
  };
  const editAddressInfo = () => {
    requests.getProfileAdress();
    goToAddressEdit(history);
  };

  return (
    <div>
      {states.profile.name && (
        <DataContainer>
          <div>
            <p>{states.profile.name}</p>
            <p>{states.profile.email}</p>
            <p>{states.profile.cpf}</p>
          </div>
          <div>
            <EditOutlinedIcon onClick={editPersolnalInfo} />
          </div>
        </DataContainer>
      )}

      {states.profile.address && (
        <DataContainer>
          <div>
            <H4>Endereço Cadastrado</H4>
            <p>{states.profile.address}</p>
          </div>
          <div>
            <EditOutlinedIcon onClick={editAddressInfo} />
          </div>
        </DataContainer>
      )}
    </div>
  );
}
