import { useCallback, useMemo, useState } from "react";
import { useTrigger } from "@asosunoff/react_use_fetch";
import { ModalPersonDetail } from "./modal-person-detail";
import { tuple } from "../../../../utils/tuple";

export const useModalPersonDetail = () => {
  const [isShowModal, { onHandler, offHandler }] = useTrigger();

  const [idPerson, setIdPerson] = useState("");

  const showHandler = useCallback(
    (idPerson: string) => {
      onHandler();
      setIdPerson(() => idPerson);
    },
    [onHandler]
  );

  const Modal = useMemo(
    () => (
      <ModalPersonDetail
        visible={isShowModal}
        onCancel={offHandler}
        id={idPerson}
      />
    ),
    [idPerson, isShowModal, offHandler]
  );

  return tuple(Modal, { showHandler });
};
