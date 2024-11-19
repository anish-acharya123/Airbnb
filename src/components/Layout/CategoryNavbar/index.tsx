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
import useCustomLocation from "../../../hooks/useCustomLocation";
import useCustomSearchParams from "../../../hooks/useCustomSearchParams";

const CategoryNavbar = () => {
  const { goTo } = useCustomNavigation();
  const {query} = useCustomSearchParams()
  const searchquery = query("tab")?? "Icons"
  const isScroll = useScroll();
  const Exactpath = useCustomLocation();

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
            searchquery === item.title
              ? " border-b-2  border-black opacity-100 "
              : "border-white opacity-60"
          } flex flex-col  items-center font-semibold  hover:opacity-100 hover:border-b-2 hover:border-gray-400 border-b-2  py-5`}
          icon={item.icon}
          iconClass="text-2xl"
          labelClass="text-sm"
          onclick={() => goTo(`/?tab=${item.title}`)}
        />
      </li>
    ),
    [query]
  );


  return (
    <div
      className={`${isScroll ? "shadow-md" : ""} ${
        Exactpath === "/details" ? "hidden" : "block"
      }`}
    >
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
