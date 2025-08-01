"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

export default function CampaignSite() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Спасибо за обращение!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen text-white font-sans">
      <header className="bg-red-800 p-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center space-x-6">
          <img
            src="https://i.imgur.com/g3gfl5L.jpg"
            alt="Алексей Евсеев"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <div>
            <h1 className="text-3xl font-bold">Алексей Евсеев</h1>
            <p className="text-lg">Кандидат в депутаты от партии КПРФ</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        <section id="about">
          <h2 className="text-2xl font-semibold mb-4">Обо мне</h2>
          <Tabs defaultValue="work">
            <TabsList className="bg-red-700 rounded-md p-1">
              <TabsTrigger value="family">Семья</TabsTrigger>
              <TabsTrigger value="work">Работа</TabsTrigger>
              <TabsTrigger value="activity">Общественная деятельность</TabsTrigger>
            </TabsList>
            <TabsContent value="family" className="mt-4">
              <p>Текст и фотографии о семье будут добавлены позже.</p>
            </TabsContent>
            <TabsContent value="work" className="mt-4">
              <p>
                Являюсь начальником успешной строительной компании, реализовавшей десятки
                социальных и инфраструктурных проектов. Мы строим не просто дома — мы создаём
                будущее для наших граждан, соблюдая принципы честности, качества и ответственности.
              </p>
            </TabsContent>
            <TabsContent value="activity" className="mt-4">
              <p>
                Активный участник общественно-политической жизни. Кандидат в депутаты от партии КПРФ,
                отстаиваю интересы простых людей, борюсь за справедливость, социальную защиту и развитие
                нашей страны на основе принципов социализма.
              </p>
            </TabsContent>
          </Tabs>
        </section>

        <section id="news">
          <h2 className="text-2xl font-semibold mb-4">Новости и деятельность</h2>
          <ul className="space-y-4">
            <li className="bg-red-700 p-4 rounded-xl shadow">Участие в субботнике в районе Северный.</li>
            <li className="bg-red-700 p-4 rounded-xl shadow">Встреча с жителями по вопросам ЖКХ и благоустройства.</li>
            <li className="bg-red-700 p-4 rounded-xl shadow">Проведение круглого стола по вопросам образования.</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mb-4">Обратная связь</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-black px-2 py-1 rounded"
            />
            <Input
              name="phone"
              placeholder="Номер телефона"
              value={formData.phone}
              onChange={handleChange}
              required
              className="text-black px-2 py-1 rounded"
            />
            <Textarea
              name="message"
              placeholder="Ваше сообщение (необязательно)"
              value={formData.message}
              onChange={handleChange}
              className="text-black px-2 py-1 rounded"
            />
            <Button type="submit" className="bg-white text-red-800 font-bold hover:bg-red-100">
              Отправить
            </Button>
          </form>
        </section>
      </main>

      <footer className="bg-red-900 text-center p-4 text-sm">
        © 2025 Алексей Евсеев. Все права защищены.
      </footer>
    </div>
  );
}
