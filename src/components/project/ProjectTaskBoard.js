import React, { useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import {
  Calendar2,
  Import,
  Maximize4,
  NoteText,
  Paperclip2,
  Status,
  Task,
} from "iconsax-react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import {
  Grid,
  Flex,
  Divider,
  Modal,
  Thead,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import {
  Add,
  Calendar,
  Chart,
  ChartCircle,
  Clipboard,
  DocumentText,
  Edit,
  Eye,
  Happyemoji,
  More,
  Profile2User,
  Trash,
  UserAdd,
} from "iconsax-react";
import ModalLeft from "./ModalLeft";
import TaskTab from "./TaskTab";
import { ClipLoader } from "react-spinners";
import TaskCard from "./TaskCard";

const TaskBoard = ({ project }) => {
  const Project = project;
  return (
    <div className="h-screen w-full bg-[#F9FAFB] ">
      <Board project={Project} />
    </div>
  );
};

export default TaskBoard;

const Board = ({ project }) => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-5">
      <Column
        title="To Do"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
        project={project}
      />
      <Column
        title="In Progress"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
        project={project}
      />
      <Column
        title="Review"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
        project={project}
      />
      <Column
        title="Done"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
        project={project}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const Column = ({ title, headingColor, cards, column, setCards, project }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-5 flex items-center justify-between px-[16px] py-[10px] border-[0.2px] border-[#98A2B3] bg-[#fff] rounded-[8px]">
        <div className="flex items-center  gap-2">
          {/* <h3 className={`font-medium ${headingColor}`}>{title}</h3> */}
          <h3
            className={`font-semibold text-[14px] md:text-[16px] text-[#000] leading-[24px] `}
          >
            {title}
          </h3>
          <div className="bg-[#F7F9FC] h-[24px] w-[29px] flex items-center justify-center ">
            <span className="rounded font-semibold text-[12px] text-[#F05800]">
              {filteredCards.length}
            </span>
          </div>
        </div>
        <Task variant="Linear" color="#98A2B3" size="24" />{" "}
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return (
            <TaskCard
              key={c.id}
              c={c}
              column={column} setCards={setCards}
              project={project}
              handleDragStart={handleDragStart}
              DropIndicator ={DropIndicator}
              cards={cards}
              
            />
          );
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};


const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-[#F05800] opacity-0"
    />
  );
};

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("");
  const [description, setDescription] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      mode,
      description,
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form
          className="cursor-grab px-[16px] py-[10px] border-[0.2px] border-[#98A2B3] bg-[#fff] rounded-[8px] active:cursor-grabbing"
          layout
          onSubmit={handleSubmit}
        >
          <select
            onChange={(e) => setMode(e.target.value)}
            className="mb-2 py-2 px-1 text-[14px] text-[#344054] leading-[20px] border-[0.2px] border-[#98A2B3] bg-[#fff] rounded-[8px] w-full focus:outline-none focus:ring-[#F05800] focus:border-[#F05800]"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            type="text"
            placeholder="title"
            className="mb-2 w-full p-2 text-[14px] text-[#344054] leading-[20px] bg-[#F7F9FC] placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
            required
            autoComplete="on"
            autoFocus
            name="title"
            //value=""
            onChange={(e) => setText(e.target.value)}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full  p-2 text-[14px] text-[#344054] leading-[20px] bg-[#F7F9FC] placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex justify-center  w-full items-center gap-1.5 px-3 py-[12px] border-[0.5px] rounded-[8px] border-dashed border-[#98A2B3]  text-[#F05800] text-[14px] font-medium leading-[20px] text-xs  transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <FiPlus variant="Linear" color="#F05800" size="14" />{" "}
        </motion.button>
      )}
    </>
  );
};

const DEFAULT_CARDS = [
  // BACKLOG
  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "1",
    column: "backlog",
    mode: "High",
  },
  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "2",
    column: "backlog",
    mode: "High",
  },
  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "3",
    column: "backlog",
    mode: "High",
  },
  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "4",
    column: "backlog",
    mode: "High",
  },
  // TODO
  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "5",
    column: "todo",
    mode: "High",
  },
  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "6",
    column: "todo",
    mode: "High",
  },
  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "7",
    column: "todo",
    mode: "High",
  },

  // DOING
  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "8",
    column: "doing",
    mode: "High",
  },

  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "9",
    column: "doing",
    mode: "High",
  },
  // DONE
  {
    title: "new 1",
    description: "Look into render bug in dashboard",
    id: "10",
    column: "done",
    mode: "High",
  },
];
