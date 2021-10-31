import { Input, notification } from "antd";
import { useSelector } from "react-redux";
import { useForm } from "@asosunoff/react_use_form";
import { useDispatchPlanetsRequest } from "../dispatch/use-dispatch-planets-request";
import { selectorPlanets } from "../selectors/selector-planets";
import { useEffect } from "react";

export const SearchPlanetsByName: React.FC = () => {
  const { page, loading, search, error } = useSelector(selectorPlanets);

  useEffect(() => {
    if (!error) return;

    notification.error({
      message: "Error",
      description: error.detail,
    });
  }, [error]);

  const { dispatchPlanetsRequest } = useDispatchPlanetsRequest();

  const { handlers, initialFormHandler } = useForm();

  useEffect(() => {
    initialFormHandler({
      name: { value: search },
    });
  }, [initialFormHandler, search]);

  return (
    <Input.Search
      placeholder="write name"
      loading={loading}
      allowClear
      value={handlers.name?.value}
      onChange={(ev) => {
        handlers.name?.onChange(ev.target.value);
      }}
      onSearch={(value) => {
        dispatchPlanetsRequest(page, value);
      }}
      enterButton
    />
  );
};
