import { useSearchParams } from "react-router-dom";
import { Container } from "../../Wrappers/Container";
import { SkeletonIcon } from "../../UI/Skeletons";
import { useCallback } from "react";
import { useCustomQuery } from "../../../hooks/useCustomQuery";
import { categoryDataProps } from "./index.types";
import MaxwidthContainer from "../../Wrappers/Maxwidth";
import useCustomNavigation from "../../../hooks/useCustomNavigation";
import Button from "../../UI/Button";
import List from "../../UI/List";
import api from "../../../constants/IconsJson/index.json";
import useScroll from "../../../utils/ScrollEvent";

const CategoryNavbar = () => {
  const { goTo } = useCustomNavigation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("tab");
  const isScroll = useScroll();

  const { data, error, isLoading } = useCustomQuery<categoryDataProps>(
    ["IconQuery"],
    api
  );

  console.log(error);

  const renderItem = useCallback(
    (item: categoryDataProps) => (
      <li key={item.id} className="space-y-1 cursor-pointer">
        <Button
          label={item.title}
          className={`${
            query === item.title
              ? " border-b-2  border-black opacity-100 "
              : "border-white opacity-50"
          } flex flex-col  items-center  hover:opacity-100 hover:border-b-2 hover:border-gray-400 border-b-2  py-4`}
          icon={item.icon}
          iconClass="text-3xl"
          labelClass="text-[14px]"
          onclick={() => goTo(`/?tab=${item.title}`)}
        />
      </li>
    ),
    [query]
  );

  return (
    <div className={`${isScroll && "shadow-md"}`}>
      <MaxwidthContainer>
        <Container>
          {!isLoading ? (
            <>
              <List
                className="flex flex-row justify-between w-full"
                items={data}
                renderItem={renderItem}
              />
            </>
          ) : (
            <>
              <SkeletonIcon count={17} />
            </>
          )}
        </Container>
      </MaxwidthContainer>
    </div>
  );
};

export default CategoryNavbar;
