import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Calendar, Users } from "lucide-react"

export default async function SubscribersPage() {
  const supabase = await createClient()

  // Fetch all subscribers
  const { data: subscribers, error } = await supabase
    .from("subscribers")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching subscribers:", error)
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-red-500">Error loading subscribers. Please try again.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const totalSubscribers = subscribers?.length || 0
  const recentSubscribers = subscribers?.slice(0, 5) || []

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center gap-2">
        <Users className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold">Newsletter Subscribers</h1>
      </div>

      {/* Stats Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Subscription Overview
          </CardTitle>
          <CardDescription>Total newsletter subscribers and recent activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">{totalSubscribers} Total Subscribers</div>
        </CardContent>
      </Card>

      {/* Subscribers List */}
      <Card>
        <CardHeader>
          <CardTitle>All Subscribers</CardTitle>
          <CardDescription>Complete list of newsletter subscribers</CardDescription>
        </CardHeader>
        <CardContent>
          {totalSubscribers === 0 ? (
            <p className="text-gray-500 text-center py-8">No subscribers yet. Share your newsletter to get started!</p>
          ) : (
            <div className="space-y-4">
              {subscribers?.map((subscriber) => (
                <div
                  key={subscriber.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">{subscriber.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {new Date(subscriber.created_at).toLocaleDateString()}
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
