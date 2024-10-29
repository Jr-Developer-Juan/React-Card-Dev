import "./App.css";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";

function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");
  const variants = ["bordered"];
  const handleWhatsAppClick = () => {
  const phoneNumber = "3004577246";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  window.open(whatsappLink, "_blank");
  };

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <div className="container">
      <Card className="max-w-[540px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src="../../Logo.png" />
            <div className="flex flex-col items-start justify-center gap-1">
              <h4 className="font-semibold leading-none text-small text-default-600">
                Jr-Dev (Juan Esteban)
              </h4>
              <h5 className="tracking-tight text-small text-default-400">
                @Jr-Developer
              </h5>
            </div>
          </div>
          <Button
            className={
              isFollowed
                ? "bg-transparent text-foreground border-default-200"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            <Button
              isIconOnly
              className="text-default-900/60 data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
              onPress={() => setLiked((v) => !v)}
            >
              <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "currentColor" : "none"}
              />
            </Button>
            {isFollowed ? "Siguiendo" : "Seguir"}
          </Button>
        </CardHeader>
        <Divider />
        <br />
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
            Desarrollador Full-Stack especializado en JavaScript, con
            experiencia tanto en el desarrollo del lado del cliente como del
            servidor. Capaz de crear aplicaciones web completas utilizando
            tecnologías como React.js para el frontend y Node.js para el
            backend.{" "}
          </p>
          <span className="pt-2">
            #SoftwareDeveloper
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
          <br />
          <>
            <div className="flex flex-wrap gap-3">
              {backdrops.map((b) => (
                <Button
                  key={b}
                  variant="flat"
                  color={b === "blur" ? "primary" : "success"}
                  onPress={() => handleOpen(b)}
                  className="capitalize"
                >
                  {b === "blur" ? "Contacto" : b}
                </Button>
              ))}
            </div>
            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex gap-5">
                      <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="../../Develop-removebg-preview.png"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="flex flex-col items-start justify-center gap-1">
                        <h4 className="font-semibold leading-none text-small text-default-600">
                          Jr-Dev (Juan Esteban)
                        </h4>
                        <h5 className="tracking-tight text-small text-default-400">
                          @Jr-Developer
                        </h5>
                      </div>
                    </ModalHeader>
                    <ModalBody>
                      {
                        <div className="flex flex-col w-full gap-4">
                          {variants.map((variant) => (
                            <div
                              key={variant}
                              className="flex flex-col flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0"
                            >
                              <Input
                                type="text"
                                variant={variant}
                                label="Nombre"
                              />
                              <Input
                                type="text"
                                variant={variant}
                                label="Apellido"
                              />
                              <Input
                                type="email"
                                variant={variant}
                                label="Correo Electrónico"
                              />
                              <Input
                                type="tel"
                                variant={variant}
                                label="Teléfono"
                              />
                            </div>
                          ))}
                        </div>
                      }
                    </ModalBody>
                    <ModalFooter>
                      <Button color="success" variant="flat" onClick={handleWhatsAppClick}>
                        <WhatsAppIcon />
                      </Button>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Aceptar
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        </CardBody>
        <br />
        <Divider />
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">32.1K</p>
            <p className=" text-default-400 text-small">Siguiendo</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Seguidores</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
