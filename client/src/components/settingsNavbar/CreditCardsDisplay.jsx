import React, { useEffect } from "react";
import { CardFrontLayout } from "./Payment";
import { useCreditCardsContext } from "../../context/CreditCardsContext";
import { Link } from "react-router-dom";

import { FaArrowTrendUp } from "react-icons/fa6";
import { CiTrash, CiEdit, CiCircleCheck } from "react-icons/ci";
import CardSkeleton from "../../daisy/CardSkeleton";
import useGetCreditCards from "../../hooks/card/useGetCreditCards";
import Modal from "../../daisy/Modal";
export const CreditCardsDisplay = () => {
  const { cards } = useCreditCardsContext();
  const { getCreditCards, loading } = useGetCreditCards();

  useEffect(() => {
    getCreditCards();
  }, []);
  return (
    <div className="  w-full h-full  flex flex-col ">
      {!loading && (
        <div className="border-b-2 border-spacing-5">
          <h1 className=" py-3">
            You Currently have{" "}
            <span className="text-primary">{cards.length} </span> credit cards.
            Max Cards is <span className="text-primary">3</span>.
            {cards.length < 3 && (
              <Link to={"/main/create/card"} className=" ml-5 text-primary ">
                Add one
                <FaArrowTrendUp className="inline ml-2" />
              </Link>
            )}
          </h1>
        </div>
      )}
      {loading ? (
        cards.map((_, i) => <CardSkeleton key={i} />)
      ) : (
        <div className="  relative w-[350px] mb-20 flex flex-col gap-4 ">
          {cards.map((card, i) => (
            <CardLayout key={i} loading={loading}>
              <CardFrontLayout key={i} cardData={card} cardLayout />
            </CardLayout>
          ))}
        </div>
      )}
      <Modal func={() => console.log("hello")} activate />
    </div>
  );
};

const CardLayout = ({ children, loading }) => {
  return (
    <div className="w-[280px] md:w-[300px] flex flex-col  gap-4 mt-5 mx-5  ">
      {children}
      {!loading && (
        <div className=" flex w-full text-2xl items-center justify-between px-2 ">
          <div
            className="tooltip tooltip-bottom cursor-pointer"
            data-tip="Activate card"
          >
            <CiCircleCheck
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
          </div>
          <div
            className="tooltip tooltip-bottom cursor-pointer"
            data-tip="Edit card"
          >
            <CiEdit />
          </div>
          <div
            className="tooltip tooltip-bottom cursor-pointer hover:text-red-500"
            data-tip="Remove card"
          >
            <CiTrash />
          </div>
        </div>
      )}
    </div>
  );
};
