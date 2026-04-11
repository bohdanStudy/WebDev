export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  console.log('New subscription:', body)

  return {
    success: true,
    message: 'Subscription created successfully',
    planId: body.planId,
    planName: body.planName,
  }
})
