import { Modal, ModalProps } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatchPlanetDetailRequest } from "../../dispatch/use-dispatch-planet-detail-request";
import { selectorPlanetDetail } from "../../selectors/selector-planet-detail";
import { PlanetDetail } from "../planet-detail";

interface ModalPlanetDetailProps
  extends Pick<ModalProps, "visible" | "onCancel"> {
  id: string;
}

export const ModalPlanetDetail: React.FC<ModalPlanetDetailProps> = ({
  id,
  visible,
  onCancel,
}) => {
  const { planet, loading } = useSelector(selectorPlanetDetail);

  const { dispatchPlanetDetailRequest } = useDispatchPlanetDetailRequest();

  useEffect(() => {
    if (visible) {
      dispatchPlanetDetailRequest(id);
    }
  }, [dispatchPlanetDetailRequest, id, visible]);

  return (
    <Modal
      title="Planet detail"
      width="800px"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <PlanetDetail planet={planet} loading={loading} />
    </Modal>
  );
};
