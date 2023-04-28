import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchUser } from "../src/modules/api";

export default function complete() {
  const router = useRouter();
  const [choice, setChoice] = useState({ device: "", accessory: "" });
  const [name, setName] = useState("");

  useEffect(() => {
    const device = localStorage.getItem("selected_device");
    const accessory = localStorage.getItem("selected_accessory");

    setChoice({ device, accessory });
  }, []);

  useEffect(() => {
    async function fetch() {
      const res = await fetchUser();
      setName(res.name);
    }

    fetch();
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          {name}님이 선택하신 장비는 {choice.device}이고, 선택하신 악세서리는{" "}
          {choice.accessory}입니다.
        </h3>
      </div>

      <button onClick={() => router.push("/")}>제출하기</button>
      <button onClick={() => router.push("/start")}>
        첫 화면으로 돌아가기
      </button>
    </div>
  );
}
