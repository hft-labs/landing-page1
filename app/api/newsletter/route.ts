import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      cookies: {
        getAll() {
          return []
        },
        setAll() {},
      },
    })

    const { data, error } = await supabase.from("subscribers").insert([{ email }]).select()

    if (error) {
      // Handle duplicate email error gracefully
      if (error.code === "23505") {
        return NextResponse.json({ error: "This email is already subscribed!" }, { status: 400 })
      }
      console.error("[v0] Insert error:", error)
      return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 })
    }

    console.log(`[v0] Newsletter subscription saved:`, data)
    return NextResponse.json({ message: "Successfully subscribed to newsletter!" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
