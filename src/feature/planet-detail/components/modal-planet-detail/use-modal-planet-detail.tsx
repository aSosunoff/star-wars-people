import { useCallback, useMemo, useState } from "react";
import { useTrigger } from "@asosunoff/react_use_fetch";
import { ModalPlanetDetail } from "./modal-planet-detail";
import { tuple } from "../../../../utils/tuple";

export const useModalPlanetDetail = () => {
  const [isShowModal, { onHandler, offHandler }] = useTrigger();

  const [idPlanet, setIdPlanet] = useState("");

  const showHandler = useCallback(
    (idPlanet: string) => {
      onHandler();
      setIdPlanet(() => idPlanet);
    },
    [onHandler]
  );

  const Modal = useMemo(
    () => (
      <ModalPlanetDetail
        visible={isShowModal}
        onCancel={offHandler}
        id={idPlanet}
      />
    ),
    [idPlanet, isShowModal, offHandler]
  );

  return tuple(Modal, { showHandler });
};
