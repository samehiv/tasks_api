module.exports = task => ({
    id: task.id,
    fromLocation: task.fromLocation,
    toLocation: task.toLocation,
    deliveryDate: task.deliveryDate,
    startedAt: task.startedAt,
    finishedAt: task.finishedAt,
    driverName: task.driverName,
    courier: task.courier,
    description: task.description,
    status: task.status,
    driverComment: task.driverComment
})