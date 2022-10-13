import { HtmlHTMLAttributes } from "react";
import { ProductSkekeletonContainer, SkeletonItem } from "./styles";

type ProductSkeletonProps =  HtmlHTMLAttributes<HTMLDivElement>;

export const ProductSkeleton = ({  ...props }: ProductSkeletonProps) => {
  return (
    <ProductSkekeletonContainer {...props} >
      <SkeletonItem  />
      <div>
        <SkeletonItem  />
        <SkeletonItem  />
      </div>
    </ProductSkekeletonContainer>
  )
}

