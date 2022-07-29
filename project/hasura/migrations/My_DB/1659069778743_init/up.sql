SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.class (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.enrolment (
    student_id uuid NOT NULL,
    class_id uuid NOT NULL
);
CREATE TABLE public.student (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE VIEW public.student_by_name AS
 SELECT student.id,
    student.name
   FROM public.student
  WHERE (student.name ~~ '%T%'::text);
ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.enrolment
    ADD CONSTRAINT enrolment_pkey PRIMARY KEY (student_id);
ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_class_updated_at BEFORE UPDATE ON public.class FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_class_updated_at ON public.class IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_student_updated_at BEFORE UPDATE ON public.student FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_student_updated_at ON public.student IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.enrolment
    ADD CONSTRAINT enrolment_class_id_fkey FOREIGN KEY (class_id) REFERENCES public.class(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.enrolment
    ADD CONSTRAINT enrolment_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.student(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
