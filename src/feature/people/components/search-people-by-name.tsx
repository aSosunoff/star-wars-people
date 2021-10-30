import { Input } from "antd";
import { useSelector } from "react-redux";
import { useForm } from "@asosunoff/react_use_form";
import { useDispatchPeopleRequest } from "../dispatch/use-dispatch-people-request";
import { selectorPeople } from "../selectors/selector-people";
import { useEffect } from "react";

export const SearchPeopleByName: React.FC = () => {
  const { page, loading, search } = useSelector(selectorPeople);

  const { dispatchPepleRequest } = useDispatchPeopleRequest();

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
        dispatchPepleRequest(page, value);
      }}
      enterButton
    />
  );
};
