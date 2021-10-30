import { Input } from "antd";
import { useSelector } from "react-redux";
import { useDispatchPeopleRequest } from "../dispatch/use-dispatch-people-request";
import { selectorPeople } from "../selectors/selector-people";

export const SearchPeopleByName: React.FC = () => {
  const { page, loading } = useSelector(selectorPeople);

  const { dispatchPepleRequest } = useDispatchPeopleRequest();

  return (
    <Input.Search
      placeholder="write name"
      loading={loading}
      allowClear
      onSearch={(value) => {
        dispatchPepleRequest(page, value);
      }}
      enterButton
    />
  );
};
