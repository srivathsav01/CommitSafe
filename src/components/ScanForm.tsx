import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function ScanForm() {

    const formSchema = z.object({
        repoOwner: z.string()
                    .min(1, { message: "Owner name cannot be empty"})
                    .max(39, { message: "Owner name too long"})
                    .regex(/^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/, { message: "Owner name must only contain letters, numbers, -, and cannot start/end with -"}),

        repoName: z.string()
                    .min(1, { message: "Repository name cannot be empty"})
                    .max(100, { message: "Repo name too long"})
                    .regex(/^[A-Za-z0-9_.](?:[A-Za-z0-9_.-]*[A-Za-z0-9_.])?$/, { message: "Repo name must only contain letters, numbers, -, _, ., and cannot start/end with -"}),

        branch: z.string()
                    .min(1,{ message:  "Branch name cannot be empty"})
                    .regex(/^[^\s~^:?*\[\\]+$/, { message: "Branch name cannot contain spaces or any of ~ ^ : ? * [ \\ characters"}),

        patToken: z.string()
                    .min(40, { message: "PAT token too short"})
                    .max(255, { message: "PAT token too long"})
                    .regex(/^(gh[pousr]_[A-Za-z0-9]{36,255}|[A-Za-z0-9]{40})$/, { message: "Invalid GitHub Personal Access Token format (must be 40 chars or start with ghp_/gho_/ghr_/ghu_)"}),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            repoOwner: "",
            repoName: "",
            branch: "",
            patToken: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <div className="flex flex-col laptop:flex-row gap-4">
                    <FormField
                        control={form.control}
                        name="repoOwner"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Repository Owner</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="repoName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Repository Name</FormLabel>
                                <FormControl>  
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="branch"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Branch</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>
                    <FormField
                        control={form.control}
                        name="patToken"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>patToken</FormLabel>
                                <FormControl>
                                    <Input placeholder="" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="laptop:fixed bottom-0 left-0 w-full flex justify-center p-4">
                        <Button type="submit" className="bg-black text-white hover:bg-black/80">Submit</Button>
                    </div>
                </form>
            </Form>
        </>
    );
}

const SubmitButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
    <motion.button
        className="modal-button"
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        {label}
    </motion.button>
);

export default ScanForm;