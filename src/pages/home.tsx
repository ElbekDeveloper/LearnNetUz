import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useMutation } from "convex/react"
import { api } from "@convex/api"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Code2, 
  Award, 
  ArrowRight,
  Phone,
  User,
  Linkedin,
  Bot,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  CalendarCheck2,
  Presentation,
  Theater
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const formSchema = z.object({
  fullName: z
  .string()
  .min(3, "F.I.O kamida 3 ta belgidan iborat bo'lishi kerak")
  .regex(/^[^0-9]*$/, "Ismda raqamlar ishlatilishi mumkin emas") // Blocks all digits
  .refine((val) => /^[a-zA-Zа-яА-ЯёЁo'O'g'G'shSHchCHnpshqh\s]+$/.test(val), {
    message: "Ismda faqat harflar bo'lishi kerak",
  }),
  phone: z
  .string()
  .min(1, "Telefon raqami kiritilishi shart")
  // 1. First, validate the "look" of the input (allowing digits, spaces, and dashes)
  .refine((val) => {
    const digitsOnly = val.replace(/\D/g, "");
    return digitsOnly.length === 9;
  }, {
    message: "Telefon raqami 9 ta raqamdan iborat bo'lishi kerak",
  })
  // 2. Then, transform it to the clean '901112233' format for your API
  .transform((val) => val.replace(/\D/g, "")), 
   track: z.string().min(1, "Iltimos, yo'nalishni tanlang"),
})

type FormValues = z.infer<typeof formSchema>

export function HomePage() {
  const createRegistration = useMutation(api.registrations.create)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      track: "",
    },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      await createRegistration({
        fullName: values.fullName,
        phone: values.phone,
        track: values.track as "spring-autumn" | "summer-winter",
      })
      toast.success("Arizangiz qabul qilindi! Aloqa uchun +998 91 738 11 66")
      form.reset({
        fullName: "",
        phone: "",
        track: "",
      })
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Xatolik yuz berdi. Iltimos, +998 91 738 11 66 ga qo'ngiroq qiling.")
    }
  }

  const formatPhoneNumber = (value: string) => {
  if (!value) return value;
  
  // 1. Remove all non-digits
  const phoneNumber = value.replace(/[^\d]/g, '');
  
  // 2. Limit to 9 digits (Uzbekistan mobile format without +998)
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength <= 2) return phoneNumber;
  if (phoneNumberLength <= 5) return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
  if (phoneNumberLength <= 7) return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5)}`;
  if (phoneNumberLength <= 9) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`;
  }
  
  // Return the first 9 digits formatted if they type more
  return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`;
};

  const scrollToRegister = () => {
    const element = document.getElementById("registration-form")
    element?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToProgram = () => {
    const element = document.getElementById("programs")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
        </div>
        
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
            <Code2 className="w-4 h-4" />
            <span className="text-sm font-medium">Ustoz-shogird an'anasida darslar</span>
          </div>
          <TooltipProvider>
  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance max-w-4xl mx-auto leading-tight">
    O'zbekistonning 2 ta{" "}
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="text-primary underline decoration-dotted underline-offset-8 cursor-help">
          Microsoft MVP
        </span>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs p-4 bg-popover text-popover-foreground border shadow-xl">
        <div className="space-y-2">
          <p className="font-bold text-base text-primary">Most Valuable Professional</p>
          <p className="text-sm leading-relaxed">
            Bu Microsoft tomonidan texnologiya sohasidagi eng kuchli ekspertlarga beriladigan global mukofot. 
            Siz dunyo tan olgan va sanoat standartlarini belgilaydigan mutaxassislardan bilim olasiz.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>{" "}
    mutaxassislaridan .NET texnologiyalarini o'rganing
  </h1>
</TooltipProvider>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            Professional .NET dasturchi bo'ling va jahon darajasidagi loyihalarda ishtirok eting. Biz bilan nazariya va amaliyotni birlashtiring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToRegister} className="rounded-full px-8 h-12 text-base font-semibold transition-all hover:scale-105">
              Ro'yxatdan o'tish <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToProgram} className="rounded-full px-8 h-12 text-base font-semibold">
              Dastur bilan tanishish
            </Button>
          </div>
        </div>
      </section>

      {/* MVP Instructors Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bizning Mentorlar</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Sizga sohadagi eng tajribali va xalqaro darajada tan olingan mutaxassislar dars berishadi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Elbek Normurodov",
                title: "O'zbekistondagi birinchi Microsoft MVP (2023-2025)",
                photo: "/profile.jpg",
                description: "Murakkab nazariy tushunchalarni chuqur tahlil qilib beradi hamda har bir o‘quvchining savollariga javob berib, ularning o‘sish darajasini doimiy nazorat qiladi.",
                linkedin: "https://www.linkedin.com/in/elbekdeveloper/"
              },
              {
                name: "Nodirxon Abdumurotov",
                title: "Microsoft MVP 2025",
                photo: "/Nodirkhan.jpg",
                description: "Amaliy ish jarayoni va loyihalar arxitekturasidan dars beradi hamda o‘quvchilarga o‘z ishlarini muvaffaqiyatli yakunlashda mentorlik qiladi.",
                linkedin: "https://www.linkedin.com/in/nodirxon-abdumurotov-94b6a0222/"
              }
            ].map((instructor, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden group bg-background/50 backdrop-blur-sm">
                <CardHeader className="flex flex-col items-center text-center gap-4 pb-4">
                  <div className="relative">
                    <img 
                      src={instructor.photo} 
                      alt={instructor.name}
                      className="w-32 h-32 rounded-full object-cover ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all" 
                    />
                    <a 
                      href={instructor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold mb-1">{instructor.name}</CardTitle>
                    <p className="text-sm font-medium text-primary mb-2">{instructor.title}</p>
                    <Badge variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-none">
                      <Award className="w-3 h-3 mr-1" /> Microsoft MVP
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {instructor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistants Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10" />
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              24/7 Sun'iy Intellekt Yordamchilar <Bot className="w-8 h-8 text-primary animate-pulse" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Kurs davomida sizga yordam beradigan AI yordamchilarimiz bilan tanishing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Lexi */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <Card className="relative bg-background border-none overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                    <div className="relative">
                      <img src="/lexi.png" alt="Lexi" className="w-24 h-24 rounded-2xl object-cover" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" title="Online 24/7" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                        <h3 className="text-2xl font-bold">Lexi</h3>
                        <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20 flex gap-1 items-center">
                          <Sparkles className="w-3 h-3" /> AI O'qituvchi
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Biz o'tgan mavzu bo'yicha savol-javob qiladi, bilmaganingizni o'rgatadi. Kunning istalgan vaqtida xizmatingizda!
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-green-600">
                        <MessageCircle className="w-4 h-4" /> Online 24/7
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Alex */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <Card className="relative bg-background border-none overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                    <div className="relative">
                      <img src="/alex2.png" alt="Alex" className="w-24 h-24 rounded-2xl object-cover" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" title="Online 24/7" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                        <h3 className="text-2xl font-bold">Alex</h3>
                        <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 flex gap-1 items-center">
                          <CheckCircle2 className="w-3 h-3" /> AI Tekshiruvchi
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Har kuni topshiriqlaringizni tekshiradi va batafsil feedback beradi. Xatolaringizni tushunib, o'sishingizga yordam beradi.
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-green-600">
                        <MessageCircle className="w-4 h-4" /> Online 24/7
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nega bizni tanlashadi?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Bizning kursimiz boshqalardan nima bilan ajralib turadi?
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Keng qamrovli dastur",
                desc: "C# dan tortib DevOps gacha bo'lgan to'liq stack.",
                icon: <GraduationCap className="w-6 h-6" />
              },
              {
                title: "24/7 AI yordamchilar",
                desc: "Lexi va Alex bilan istalgan vaqtda o'rganing va tekshiring.",
                icon: <Bot className="w-6 h-6" />
              },
              {
                title: "Microsoft MVP ustozlar",
                desc: "Xalqaro darajadagi mutaxassislardan bevosita bilim oling.",
                icon: <Award className="w-6 h-6" />
              },
              {
                title: "Amaliy loyihalar",
                desc: "Real-world tajriba va portfoliongiz uchun tayyor loyihalar.",
                icon: <Code2 className="w-6 h-6" />
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-background border hover:border-primary transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs"  className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O'quv Dasturlari</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              O'z darajangizga mos keladigan o'quv yo'nalishini tanlang.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Track 1 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors bg-primary/5 border-primary/20">
              <div className="relative">
              {/* Top Badges Area */}
                <div className="absolute top-0 right-0 p-4 flex flex-col items-end gap-2">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary/80 border-none">
                    Online
                  </Badge>
                  {/* Limited Seats Indicator */}
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-50 border border-amber-100">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-amber-700 uppercase">29 joy qoldi</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Bahorgi qabul</CardTitle>
                  <CardDescription className="text-lg">0 dan Junior darajagacha</CardDescription>
                </CardHeader>
            </div>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="font-medium">6 oylik intensiv kurs.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <CalendarCheck2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium">1-Aprelda boshlaymiz.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Yangi boshlovchilar uchun</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Portfolio va ishga joylashishga ko'mak</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase text-muted-foreground font-bold leading-none mb-1">Narxi</p>
                    <p className="text-xl font-black text-primary">1 250 000 so'm</p>
                  </div>
                  <Badge variant="outline" className="bg-background font-semibold">oyiga</Badge>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" /> Nimalarni o'rganasiz:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li>• C# Asoslari</li>
                    <li>• .NET Web API</li>
                    <li>• Entity Framework</li>
                    <li>• SQL Server</li>
                    <li>• Clean Architecture</li>
                    <li>• CV va Karyera Qurish</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

              <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors">      
              <div className="absolute top-0 right-0 p-4">
                <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-none">Offline</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Yozgi seminarlar</CardTitle>
                <CardDescription className="text-lg">Intensiv malaka oshirish</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Presentation className="w-5 h-5" />
                    </div>
                    <span className="font-medium">12 kunlik offline seminar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <CalendarCheck2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium">1-Iyunda boshlaymiz.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="font-medium">1+ yil tajribali dasturchilar uchun</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Chuqurlashtirilgan mavzular va networking</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase text-muted-foreground font-bold leading-none mb-1">Kurs narxi (jami)</p>
                    <p className="text-xl font-black text-primary">2 500 000 so'm</p>
                  </div>
                  <div className="text-right">
                    <Badge className="font-bold">12 ta dars</Badge>
                    <p className="text-[10px] text-muted-foreground mt-1">to'liq kurs uchun</p>
                  </div>
              </div>
                <div className="pt-4 border-t">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" /> Seminar mavzulari:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li>• CLR via C#</li>
                    <li>• Performance Optimizations</li>
                    <li>• Distributed Systems</li>
                    <li>• Microservices vs Monolith</li>
                    <li>• Advanced Patterns</li>
                    <li>• System Design</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration-form" className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-none">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-3xl font-bold">Ro'yxatdan o'ting</CardTitle>
                <CardDescription className="text-lg">
                  Ma'lumotlaringizni qoldiring va biz siz bilan bog'lanamiz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="w-4 h-4" /> F.I.O
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Ism sharifingiz" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="flex items-center gap-2">
                              <Phone className="w-4 h-4" /> Telefon raqami
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                  +998
                                </span>
                                <Input 
                                  placeholder="90 123-45-67" 
                                  {...field} 
                                  className="h-12 w-full pl-14" // Extra padding for the prefix
                                  onChange={(e) => {
                                    const formatted = formatPhoneNumber(e.target.value);
                                    field.onChange(formatted);
                                  }}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                        {/* Track Field */}
                        <FormField
                          control={form.control}
                          name="track"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel className="flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" /> Yo'nalish
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  {/* Added w-full here to match the Input width */}
                                  <SelectTrigger className="h-12 w-full"> 
                                    <SelectValue placeholder="Yo'nalishni tanlang" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="spring-autumn">Bahor Dasturi (6 oylik online)</SelectItem>
                                  <SelectItem value="summer-winter">Yoz Seminari (12 kunlik offline)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-bold transition-all hover:scale-[1.02]" 
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
  Arizangiz qabul qilingach, siz bilan bog'lanamiz. <br />
  Yordam kerakmi? <span className="text-foreground font-medium">+998 91 738 11 66</span>
</p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container px-4 mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xl">Powered by</span>
            <img src="/tarteeb-logo.png"  className="h-8 rounded-lg" alt="T Logo" />
          </div>
          <p className="text-muted-foreground">
            © 2026 Tarteeb Solutions LLC. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  )
}
