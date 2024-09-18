<template>
    <AlertDialog>
        <!-- Trigger button. -->
        <AlertDialogTrigger as-child>
            <Button
                variant="destructive"
                class="col-span-2 row-span-1 font-bold tracking-widest"
            >
                <Icon
                    name="ic:round-local-fire-department"
                    size="1rem"
                    class="mr-2"
                />
                FIRE SUPPRESSION
            </Button>
        </AlertDialogTrigger>

        <!-- AlertDialog setup. -->
        <AlertDialogContent class="max-w-96">
            <!-- Header. -->
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>Activate fire suppression?</AlertDialogDescription>

            <!-- Footer. -->
            <AlertDialogFooter class="flex flex-row gap-3">
                <AlertDialogCancel class="m-0">
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction class="m-0">
                    Confirm
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
