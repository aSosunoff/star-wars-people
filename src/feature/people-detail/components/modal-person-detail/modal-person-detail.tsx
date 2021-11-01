import { Modal, ModalProps } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatchPeopleDetailRequest } from "../../dispatch/use-dispatch-people-detail-request";
import { selectorPeopleDetail } from "../../selectors/selector-people-detail";
import { PeopleDetail } from "../people-detail";

interface ModalPersonDetailProps
  extends Pick<ModalProps, "visible" | "onCancel"> {
  id: string;
}

export const ModalPersonDetail: React.FC<ModalPersonDetailProps> = ({
  id,
  visible,
  onCancel,
}) => {
  const { person, loading } = useSelector(selectorPeopleDetail);

  const { dispatchPeopleDetailRequest } = useDispatchPeopleDetailRequest();

  useEffect(() => {
    if (visible) {
      dispatchPeopleDetailRequest(id);
    }
  }, [dispatchPeopleDetailRequest, id, visible]);

  return (
    <Modal width="800px" visible={visible} onCancel={onCancel} footer={null}>
      <PeopleDetail person={person} loading={loading} />
    </Modal>
  );
};
