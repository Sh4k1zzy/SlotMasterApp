import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function SlotMasterApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Log into Chumba/Pulsz", done: false },
    { id: 2, text: "Collect daily rewards", done: false },
    { id: 3, text: "Play 10 low volatility spins", done: false },
    { id: 4, text: "Play 10 high volatility spins", done: false },
    { id: 5, text: "Record session in tracker", done: false },
    { id: 6, text: "Check social media for promo codes", done: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  return (
    <Tabs defaultValue="daily">
      <TabsList className="grid grid-cols-2 mb-4">
        <TabsTrigger value="daily">Daily Checklist</TabsTrigger>
        <TabsTrigger value="planner">Planner</TabsTrigger>
      </TabsList>

      <TabsContent value="daily">
        <Card className="p-4">
          <CardContent>
            <div className="space-y-2">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center gap-2">
                  <Checkbox checked={task.done} onCheckedChange={() => toggleTask(task.id)} />
                  <span className={task.done ? "line-through text-gray-400" : ""}>{task.text}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <Input
                  placeholder="New task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <Button onClick={addTask}>Add</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="planner">
        <Card className="p-4">
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>Morning (8am–12pm):</strong> Review bonuses, set bankroll.</p>
              <p><strong>Afternoon (12pm–6pm):</strong> Test new slots, track performance.</p>
              <p><strong>Evening (6pm–10pm):</strong> Hit high-volatility games, check hot forums.</p>
              <p><strong>Night (10pm+):</strong> Log results, reset goals, decompress.</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
